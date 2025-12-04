export const sortTasks = (tasks, order) => {
  const list = tasks.slice();

  switch (order) {
    case 'priorityAsc':
      return list.sort((a, b) => a.priority - b.priority);

    case 'priorityDesc':
      return list.sort((a, b) => b.priority - a.priority);

    case 'aZ':
      return list.sort((a, b) => a.title.localeCompare(b.title));

    case 'zA':
      return list.sort((a, b) => b.title.localeCompare(a.title));

    case 'createdDesc':
      return list.reverse();

    case 'createdAsc':
      return tasks;

    case 'updatedDesc':
      return list.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

    case 'updatedAsc':
      return list.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));

    default:
      throw new Error(`Unknown filter value: ${order}`);
  }
};
