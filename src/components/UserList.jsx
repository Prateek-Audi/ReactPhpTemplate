import React from "react";
import { Table } from "react-bootstrap";
import "../styles/UserList.css";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobile: "+123456789",
      role: "Admin",
      status: "Active",
      actions: "Edit | Delete",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      mobile: "+987654321",
      role: "Teacher",
      status: "Active",
      actions: "Edit | Delete",
    },
  ];

  return (
    <>
      <div className="listContainer p-3">List Users</div>
      <div className="outerTableContainer">
        <div className="table-responsive">
          <Table hover className="styled-table">
            <thead className="tableHead">
              <tr className="tableRow">
                <th>Sr. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>{user.actions}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="pagination-divider"></div>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default UserList;
