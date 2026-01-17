# Flower Wholesale CRM (ASP.NET Core + PostgreSQL)

## What it is
A domain-specific CRM for a flower wholesale workflow: customers, suppliers, products (flowers), and orders. It was built with a responsive UI and fast search/filtering.

## Why I built it
The workflow started paper-based, then moved to spreadsheets. That improved accessibility, but it still left room for frequent user errors (inconsistent entries, hard-to-track order status, manual copy/paste). The CRM shifts the same process into a dedicated system with structured forms, validation, and a clearer overview meanwhile also opens more opportunities for extensions and customizations.

## Problems it solves
- A single, consistent place for customers/suppliers/products/orders
- Fast search/filter/sort for daily work
- Fewer user errors thanks to validation and consistent data entry
- More reliable reporting and repeatable workflows (instead of manual spreadsheet steps)

## Tech stack
- ASP.NET Core MVC
- EF Core + PostgreSQL
- Bootstrap (responsive UI)
- Reusable partial views/modals for CRUD

## Showcase
<details> <summary><b>Overview of Flowers</b></summary>

![Menu](../../assets/case/crm_flowers.png)

</details> <details> <summary><b>Adding Flowers</b></summary>

![Menu](../../assets/case/crm_adding_flower.png)

</details> <details> <summary><b>Supplier modal</b></summary>

![Menu](../../assets/case/crm_suppliers_details.png)

</details>

## Next improvements
- Roles/permissions + audit log
- PDF workflows (printable order sheets / confirmations)
- Backup/restore + import templates
- Follow-ups / reminders and customer tracking
- Extra mobile polish for field use