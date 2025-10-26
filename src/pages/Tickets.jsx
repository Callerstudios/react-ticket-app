import React, { useEffect, useState } from "react";
import { clearSession, showToast } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editTicket, setEditTicket] = useState({
    id: null,
    title: "",
    description: "",
    status: "open",
  });
  const getTickets = () =>
    JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
  const saveTickets = (data) =>
    localStorage.setItem("ticketapp_tickets", JSON.stringify(data));
  const renderTickets = () => {
    setTickets(getTickets());
  };

  // ===== Create Ticket =====
  function addTicket(e) {
    e.preventDefault();
    if (!newTicket.title || !newTicket.status) {
      showToast("Title and status are required.", "error");
      return;
    }

    const updated = [
      ...getTickets(),
      {
        id: Date.now(),
        title: newTicket.title.trim(),
        description: newTicket.description.trim(),
        status: newTicket.status,
      },
    ];

    saveTickets(updated);
    renderTickets();
    showToast("Ticket added successfully!", "success");
    setNewTicket({ title: "", description: "", status: "open" });
  }

  // ===== Edit Ticket =====
  function openEditModal(ticket) {
    setEditTicket({ ...ticket });
    setIsEditModalVisible(true);
  }

  function saveEdit(e) {
    e.preventDefault();
    if (
      !editTicket.title ||
      !["open", "in_progress", "closed"].includes(editTicket.status)
    ) {
      showToast("Invalid input or status.", "error");
      return;
    }

    const updated = getTickets().map((t) =>
      t.id === editTicket.id ? { ...editTicket } : t
    );

    saveTickets(updated);
    renderTickets();
    setIsEditModalVisible(false);
    showToast("Ticket updated successfully!", "success");
  }

  function cancelEdit() {
    setIsEditModalVisible(false);
  }
  function deleteTicket(id) {
    if (confirm("Are you sure you want to delete this ticket?")) {
      const updated = getTickets().filter((t) => t.id !== id);
      saveTickets(updated);
      renderTickets();
      showToast("Ticket deleted successfully.", "info");
    }
  }
  function logout() {
    clearSession();
    showToast("You have been logged out.", "info");
    navigate("/login");
  }
  useEffect(() => {
    setTickets(getTickets());
  }, []);
  return (
    <div>
      <section class="tickets-page container">
        <h1>Ticket Management</h1>

        <div class="ticket-form">
          <h2>Create New Ticket</h2>
          <form onSubmit={addTicket}>
            <div class="form-group">
              <label>Title *</label>
              <input type="text" placeholder="Enter ticket title" required />
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea placeholder="Enter description (optional)"></textarea>
            </div>

            <div class="form-group">
              <label>Status *</label>
              <select required>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <button type="submit" class="btn-primary">
              Add Ticket
            </button>
          </form>
        </div>

        <hr />

        <div class="ticket-list">
          <h2>Existing Tickets</h2>
          {tickets.length ? (
            <div class="ticket-grid">
              {tickets.map((ticket) => (
                <div class="ticket-card">
                  <div class="ticket-info">
                    <h3></h3>
                    <p> "No description provided."</p>
                  </div>

                  <div class="ticket-footer">
                    <span class="status">
                      {ticket.status.replace("_", " ")}
                    </span>

                    <div class="ticket-actions">
                      <button
                        class="edit-btn"
                        onClick={() => openEditModal(ticket)}
                      >
                        Edit
                      </button>
                      <button
                        class="delete-btn"
                        onClick={() => deleteTicket(ticket.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p class="no-tickets">No tickets yet.</p>
          )}
        </div>

        <button id="logoutBtn" class="logout-btn" onClick={logout}>
          Logout
        </button>
      </section>

      {isEditModalVisible && (
        <div class="modal-overlay">
          <div class="modal">
            <h2>Edit Ticket</h2>
            <form onSubmit={saveEdit}>
              <div class="form-group">
                <label>Title</label>
                <input required />
              </div>

              <div class="form-group">
                <label>Description</label>
                <textarea rows="4" required></textarea>
              </div>

              <div class="form-group">
                <label>Status</label>
                <select required>
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div class="modal-actions">
                <button
                  type="button"
                  class="btn-secondary"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
                <button type="submit" class="btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div id="toast" class="toast"></div>
    </div>
  );
};

export default Tickets;
