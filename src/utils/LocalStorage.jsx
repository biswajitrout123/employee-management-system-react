const employees = [
  {
    id: 1,
    firstName: "Durga",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI",
        taskDate: "2026-02-20",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue",
        taskDate: "2026-02-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment API",
        taskDate: "2026-02-15",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Biswajit",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build admin dashboard layout",
        taskDate: "2026-02-20",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile editing feature",
        taskDate: "2026-02-19",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page Design",
        taskDescription: "Create landing page mockup",
        taskDate: "2026-02-20",
        category: "Design"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all REST APIs",
        taskDate: "2026-02-20",
        category: "Documentation"
      }
    ]
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2026-02-20",
        category: "Management"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}