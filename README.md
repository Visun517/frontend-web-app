# 🎓 ECA Campus Management System - Frontend Web Application

A modern, highly responsive frontend application for the ECA Campus Management System. It provides a comprehensive UI for managing students, academic programs, and enrollments, communicating seamlessly with backend microservices through a centralized API Gateway.

**Live Deployed Application URL:** [http://34.126.159.127](http://34.126.159.127)  
*(Deployed on Google Cloud Run behind a Regional External Application Load Balancer)*

---

## 📌 Student & Project Information

| Field | Details |
|---|---|
| **Student Name** | Visun Prabodha |
| **Student Number** | 241711009 |
| **Slack Handle** | Visun Prabodha |
| **GCP Project ID** | `visun-gcp-lab` |
| **Submission Type** | Alternative Option (Capstone Project) |

---

## 📖 About The Project

This project is submitted for the Enterprise Cloud Architecture (ITS 2130) module in the Higher Diploma in Software Engineering (HDSE) program at the Institute of Software Engineering (IJSE). 

The frontend consumes backend microservices deployed on Google Cloud Platform (GCP). It features **Cloud Storage integration** where student profile pictures are successfully uploaded and fetched directly from a GCP Cloud Storage Bucket. The architecture ensures robust state management, form validation, and optimized routing.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Framework** | Next.js 16.1.6 | App Router for SSR and optimized routing |
| **Library** | React 19.2.3 | Core UI library |
| **Language** | TypeScript 5 | Static typing for enterprise-grade code |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Components** | ShadCN UI | Accessible Radix UI primitives |
| **Forms** | React Hook Form | Performant form state management |
| **Validation**| Zod | TypeScript-first schema validation |
| **Networking**| Axios | Promise-based HTTP client for API requests |
| **Icons** | Lucide React | Clean and modern icon set |
| **Feedback** | Sonner | Toast notifications for user interactions |
| **Utilities** | date-fns | Modern JavaScript date utility library |

---

## ✨ Core Features

| Page | Path | Description |
|---|---|---|
| **Dashboard** | `/dashboard` | System statistics overview, recent enrollment activities, and quick action shortcuts. |
| **Students** | `/students` | Full CRUD operations for students, featuring direct GCP Bucket avatar display and uploads. |
| **Programs** | `/programs` | Create, view, edit, and delete academic programs utilizing responsive card and table views. |
| **Enrollments**| `/enrollments`| Streamlined enrollment management linking students to programs with active filtering. |

---

## 📂 Project Structure

```text
webapp/
├── app/
│   ├── layout.tsx            # Root layout (Sidebar + Header + Toaster)
│   ├── page.tsx              # Entry point (Redirects to /dashboard)
│   ├── dashboard/page.tsx    # Dashboard overview interface
│   ├── students/page.tsx     # Student management interface
│   ├── programs/page.tsx     # Program management interface
│   └── enrollments/page.tsx  # Enrollment management interface
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx       # Fixed navigation sidebar
│   │   └── header.tsx        # Sticky top header
│   ├── students/
│   │   └── student-form.tsx  # Form component for Student entities
│   ├── programs/
│   │   └── program-form.tsx  # Form component for Program entities
│   └── enrollments/
│       └── enrollment-form.tsx # Form component for Enrollment logic
├── lib/
│   └── api.ts                # Axios API client configurations & interceptors
├── types/
│   └── index.ts              # Shared TypeScript interfaces and types
└── .env.local                # Environment configurations
```

⚙️ Getting Started (Local Development)

⚠️ Prerequisites: To ensure the frontend functions correctly, all backend services must be up and running locally or remotely.

Recommended Microservices Startup Order:

Config-Server (9000)

Service-Registry (9001)

Api-Gateway (7000)

Student-Service (Random Port / 0)

Program-Service (Random Port / 0)

Enrollment-Service (Random Port / 0)

Webapp (3000)

(Note: Backend microservices run on random ports and are accessed dynamically via the API Gateway running on port 7000).

1. Environment Variables
Create a .env.local file in the root webapp/ directory and configure your API Gateway endpoint:

Code snippet
NEXT_PUBLIC_API_URL=http://localhost:7000
2. Installation & Run
Open your terminal and execute the following commands:

Bash
# Install required dependencies:
npm install

# Start the development server:
npm run dev
The application will be available at http://localhost:3000
