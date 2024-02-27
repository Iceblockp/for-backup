import { ApiService } from "../apiService";


const todoEndpoint = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => "/todos",
            providesTags: "todo"
        }),
        getSingleTodo: builder.query({
            query: (id) => ({
                url:`/todos/${id}`,
                
            })
        }),
        postTodo: builder.mutation({
            query: (FormData) => ({
                url: "/todos",
                body: FormData,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }),
        }),
        updateTodo: builder.mutation({
            query: (FormData) => ({
                url: `/todos/${FormData.id}`,
                body: FormData,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            }),

        }),
        deleteTodo: builder.mutation({
            query:(id) => ({
                url:`/todos/${id}`,
                method:"DELETE",
            })
        })

    })
})

export const { useGetTodoQuery, usePostTodoMutation,useDeleteTodoMutation,useUpdateTodoMutation,useGetSingleTodoQuery } = todoEndpoint;

// get => Query
// hook
// post , patch,put,delete = mutation