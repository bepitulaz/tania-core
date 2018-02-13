package repository

import (
	"github.com/Tanibox/tania-server/src/assets/domain"
	"github.com/Tanibox/tania-server/src/assets/storage"
	uuid "github.com/satori/go.uuid"
)

type ReservoirEventRepository interface {
	Save(uid uuid.UUID, latestVersion int, events []interface{}) <-chan error
}

type ReservoirEventRepositoryInMemory struct {
	Storage *storage.ReservoirEventStorage
}

func NewReservoirEventRepositoryInMemory(s *storage.ReservoirEventStorage) ReservoirEventRepository {
	return &ReservoirEventRepositoryInMemory{Storage: s}
}

func NewReservoirFromHistory(events []storage.ReservoirEvent) *domain.Reservoir {
	state := &domain.Reservoir{}
	for _, v := range events {
		state.Transition(v.Event)
		state.Version++
	}
	return state
}

// Save is to save
func (f *ReservoirEventRepositoryInMemory) Save(uid uuid.UUID, latestVersion int, events []interface{}) <-chan error {
	result := make(chan error)

	go func() {
		f.Storage.Lock.Lock()
		defer f.Storage.Lock.Unlock()

		for _, v := range events {
			latestVersion++
			f.Storage.ReservoirEvents = append(f.Storage.ReservoirEvents, storage.ReservoirEvent{
				ReservoirUID: uid,
				Version:      latestVersion,
				Event:        v,
			})
		}

		result <- nil

		close(result)
	}()

	return result
}
