# 🎓 ECA Campus Management System - Frontend Web Application

A modern frontend application for the ECA Campus Management System. It provides a full UI for managing students, academic programs, and enrollments through the API Gateway. 

**Live Deployed Application URL:** [http://34.126.159.127](http://34.126.159.127)  
*(Deployed on Google Cloud Run behind a Regional External Application Load Balancer)*

---

## 📌 Student & Project Information (Mandatory)

| Field | Details |
|---|---|
| **Student Name** | Visun Prabodha |
| **Student Number** | 241711009 |
| **Slack Handle** | Visun Prabodha  |
| **GCP Project ID** | `visun-gcp-lab` |
| **Submission Type** | Alternative Option (Capstone Project) |

---

## 📖 About

This project is submitted for the Enterprise Cloud Architecture (ITS 2130) module in the Higher Diploma in Software Engineering (HDSE) program at the Institute of Software Engineering (IJSE). 

The frontend consumes backend microservices deployed on Google Cloud Platform (GCP). It features **Cloud Storage integration** where student profile pictures are successfully uploaded and fetched directly from a GCP Cloud Storage Bucket.

## 🛠️ Tech Stack

| Technology | Details |
|---|---|
| **Next.js** | 16.1.6 (App Router) |
| **React** | 19.2.3 |
| **TypeScript** | 5 |
| **Tailwind CSS** | 4 |
| **ShadCN UI** | Component library (Radix UI primitives) |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |
| **Axios** | HTTP client |
| **Lucide React** | Icon set |
| **Sonner** | Toast notifications |
| **date-fns** | Date formatting |

## ✨ Features

| Page | Path | Description |
|---|---|---|
| Dashboard | `/dashboard` | Stats overview, recent enrollments, quick actions |
| Students | `/students` | Create, view, edit, delete students with GCP Bucket avatar display |
| Programs | `/programs` | Create, view, edit, delete programs (card & table views) |
| Enrollments | `/enrollments` | Create, view, edit, delete enrollments with program filtering |

## 📂 Project Structure

```text
webapp/
├── app/
│   ├── layout.tsx            # Root layout (Sidebar + Header + Toaster)
│   ├── page.tsx              # Redirects to /dashboard
│   ├── dashboard/page.tsx    # Dashboard overview
│   ├── students/page.tsx     # Student management
│   ├── programs/page.tsx     # Program management
│   └── enrollments/page.tsx  # Enrollment management
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx       # Fixed navigation sidebar
│   │   └── header.tsx        # Sticky top header
│   ├── students/
│   │   └── student-form.tsx  # Student create/edit form
│   ├── programs/
│   │   └── program-form.tsx  # Program create/edit form
│   └── enrollments/
│       └── enrollment-form.tsx # Enrollment create/edit form
├── lib/
│   └── api.ts                # Axios API client (studentApi, programApi, enrollmentApi)
├── types/
│   └── index.ts              # Shared TypeScript types
└── .env.local                # Environment variables

## ⚙️ Getting Started (Local Development)

> **Prerequisites:** All backend services (Config-Server, Service-Registry, Api-Gateway, Student-Service, Program-Service, Enrollment-Service) must be running before starting the webapp.

**Full startup order:**
1. Config-Server (`9000`)
2. Service-Registry (`9001`)
3. Api-Gateway (`7000`)
4. Student-Service (`Random Port / 0`)
5. Program-Service (`Random Port / 0`)
6. Enrollment-Service (`Random Port / 0`)
7. **Webapp** (`3000`)

*(Note: Backend microservices run on random ports and are accessed dynamically via the API Gateway running on port 7000).*

### Environment Variables

Create a `.env.local` file in the `webapp/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:7000

```Installation & Run
#Install dependencies:
npm install

#Start the development server:
npm run dev

