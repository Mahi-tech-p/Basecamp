
export const userRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN : "project_admin",
    MEMBER:"member"
}

export const AvailableRoles = object.values(userRolesEnum)

export const TaskStatusEnum = {
    TODO: 'todo',
    INPROGRESS: 'inprogress',
    DONE:"done"
}
export const AvailableTasks = object.values(TaskStatusEnum)
