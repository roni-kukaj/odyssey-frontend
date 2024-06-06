import axios from "axios";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
});

const getAuthConfigWithMultipartFiles = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'multipart/form-data'
    }
});

// GET REQUESTS
export const getUsers = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users`,
        getAuthConfig()
    );
}

export const getUserByUsername = async (username) => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/username/${username}`,
        getAuthConfig()
    );
}

export const getLocations = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/locations`
    );
}

export const getFlights = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/flights`
    );
}

export const getHotels = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/hotels`
    );
}

export const getActivities = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/activities`
    );
}

export const getEvents = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/events`
    );
}

export const getLocalCuisine = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/local-cuisine`
    );
}

export const getBookmarksByUserId = async (userId) => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/bookmarks/user/${userId}`,
        getAuthConfig()
    );
}

export const getFollowersByUserId = async (userId) => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/follow/${userId}/followers`,
        getAuthConfig()
    );
}

export const getFollowingByUserId = async (userId) => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/follow/${userId}/following`,
        getAuthConfig()
    );
}

export const getTrips = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/trips`,
        getAuthConfig()
    )
}

export const getTripsByUserId = async (userId) => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/trips/user/${userId}`,
        getAuthConfig()
    )
}

export const getItems = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/items`
    )
}

export const getPosts = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/posts`,
        getAuthConfig()
    )
}

export const getReviews = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/reviews`,
        getAuthConfig()
    )
}

export const getRecommendations = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/recommendations`,
        getAuthConfig()
    )
}

export const getNews = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/news`
    )
}

export const getPlans = async () => {
    return await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/plans`,
        getAuthConfig()
    )
}

// DELETE REQUESTS

export const deleteBookmark = async (bookmarkId) => {
    return await axios.delete(
    `${import.meta.env.VITE_API_BASE_URL}/api/v1/bookmarks/${bookmarkId}`,
        getAuthConfig()
    )
}

export const deleteFollowById = async (id) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/follow/${id}`,
        getAuthConfig()
    )
}

export const deletePost = async (id) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/posts/${id}`,
        getAuthConfig()
    )
}

export const deleteTrip = async (id) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/trips/${id}`,
        getAuthConfig()
    )
}

export const deleteReview = async (id) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/reviews/${id}`,
        getAuthConfig()
    )
}

export const deleteRecommendation = async (id) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/recommendations/${id}`,
        getAuthConfig()
    )
}

export const deletePlan = async (id) => {
    return await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/plans/${id}`,
        getAuthConfig()
    )
}

// POST REQUESTS

export const registerBookmark = async (bookmark) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/bookmarks`,
        bookmark,
        getAuthConfig()
    );
}

export const registerTrip = async (trip) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/trips`,
        trip,
        getAuthConfig()
    );
}

export const registerPost = async (post) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/posts`,
        post,
        getAuthConfigWithMultipartFiles()
    )
}

export const registerFollow = async (follow) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/follow`,
        follow,
        getAuthConfig()
    )
}

export const registerReview = async (review) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/reviews`,
        review,
        getAuthConfig()
    )
}

export const registerRecommendation = async (recommendation) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/recommendations`,
        recommendation,
        getAuthConfig()
    )
}

export const registerPlan = async (plan) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/plans`,
        plan,
        getAuthConfig()
    )
}

// PUT REQUESTS

export const updateUser = async (userId, user) => {
    return await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${userId}`,
        user,
        getAuthConfigWithMultipartFiles()
    )
}

// AUTH REQUESTS

export const login = async (usernameAndPassword) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
        usernameAndPassword
    )
}

export const registerUser = async (user) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users`,
        user
    )
}

export const verify = async (usernameAndPassword) => {
    return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/verify`,
        usernameAndPassword
    )
}
