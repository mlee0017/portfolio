import { customAxios, customAxiosWithAuth } from './api'

export async function getAllComments() {
    const axios = customAxios()
    try {
        const response = await axios.get('/comment')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getComment(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/comment/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteComment(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/comment/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createComment(comment) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/comment', comment)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateComment(id, comment) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/comment/${id}`, comment)
    } catch(err) {
        console.log(err.message)
    }
}