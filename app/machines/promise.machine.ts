import { createMachine } from 'xstate';

/** @xstate-layout N4IgpgJg5mDOIC5QAUBOB7AtgS1mAdAGZgAuAxgBbYB2UAxAEoCiAygPIAyAak4qAA7pY2EtnTU+IAB6IAjADYAHPgDsi+QCYAnLMUBmDXoAs8gKxGANCACeiALQbZW-FtO6VpjYpNHFXgL7+VmhYuATE5FS0jEwAUkwAwgAqkoLCouKSMggOesp+8lryshoaZhoqRnpWtjmlevgADPLyegaNVY1OskaBQSDU6BBwkiE4eESklDRQqUIiYhJI0vamjfiKpnqaWr6dRlrVNvalshtdjaaH2kammoqBwRjjBKhw6AA2AG6Qc+mLWTkpmU2i0jRUslkKkafksxxykJU+Duey6eghdyUjxAYzC+DeACswGQSL9lmkFplltkHKZTPglM1iooVF4tCotFoavZEQy3BzNnowezzNjcXg-pSlqAaRVnIyWu42YpuXV2aoodsdL4ugden0gA */
createMachine({
  tsTypes: {} as import('./promise.machine.typegen').Typegen0,
  id: 'Promise',
  initial: 'fetching',
  states: {
    fetching: {
      on: {
        RESOLVE: {
          target: '#Promise.resolved',
        },
        REJECT: {
          target: '#Promise.rejected',
        },
      },
    },
    resolved: {},
    rejected: {},
  },
});
