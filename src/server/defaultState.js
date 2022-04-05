export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev"
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "Nikhit"
    }],
    tasks: [{
        name: "Do test",
        isComplete: false,
        id: "T1",
        group: "G1",
        owner: "U1"
    }],
    components: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great Work"
    }]
}