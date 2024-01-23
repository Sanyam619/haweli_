import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";

function Admin() {
  return (
    <>
      <div className="flex mt-20">
        {/* Side Navigation Bar */}
        <AdminNavbar />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className="grow">
          <AdminDashboard />
        </main>
      </div>
    </>
  );
}

export default Admin;
