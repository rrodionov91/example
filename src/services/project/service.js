class ProjectService {
    async getProjects () {
        const resp = await fetch('api/projects')
        return resp
    }
}

export const projectService = new ProjectService()