import Modal from "react-modal";

export default function UserEditModal({ modalIsOpen, modalOpen, modalClose }) {
  Modal.setAppElement(document.getElementById("root"));
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <Modal class="modal" isOpen={modalIsOpen}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                onClick={modalClose}
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Hi</p>
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                onClick={modalClose}
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
              <button
                onClick={modalClose}
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}