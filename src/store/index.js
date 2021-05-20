import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lists: [],
        tasks: [],
    },
    mutations: {
        SetList(state, e) {
            state.lists = e.length > 0 ? e : null;
        },

        SetTasks(state, e) {
            state.tasks = e.length > 0 ? e : null;
        },
    },
    actions: {
        async Add_list({ commit }, data) {
            await fetch("http://localhost:3000/lists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            commit("get_all_lists");
        },
        async Add_task({ dispatch }, data) {
            await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            dispatch("get_all_tasks");
        },

        async update_task(state, id) {
            await fetch("http://localhost:3000/tasks/" + this.state.tasks[id].id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(this.state.tasks[id]),
            });
        },
        async delete_task({ dispatch }, obj) {
            await fetch("http://localhost:3000/tasks/" + obj.id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
            dispatch("get_all_tasks");
            document.location.reload();
        },
        switch_task_status(state, obj) {
            fetch("http://localhost:3000/tasks/" + obj.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(obj.task),
            });
        },
        set_lid(state, obj) {
            fetch("http://localhost:3000/tasks/" + obj.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(obj),
            });
        },
        async get_all_lists({ commit }) {
            let e = await fetch("http://localhost:3000/lists");
            e = JSON.parse(await e.text());
            commit("SetList", e);
        },
        async get_all_tasks({ commit }) {
            let e = await fetch("http://localhost:3000/tasks");
            e = JSON.parse(await e.text());
            commit("SetTasks", e);
        },
    }
});