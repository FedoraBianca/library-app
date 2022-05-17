import styled from 'styled-components';
import { Modal } from 'reactstrap';

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 2rem !important;

    .footer {
      .confirm-modal-actions {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-grow: 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .confirm-modal-action {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 15px;
        }

        .confirm-modal-action-loose {
          flex: 1;
        }

        .confirm-modal-action-tight {
          flex: 0 0;
        }
      }
    }
  }

  .header {
    .close-wrapper {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    .modal-title {
      font-weight: bold;
      font-size: 1.375rem;
      color:#28403d;
      text-align: center;
    }
  }

  .body {
      font-size: 1.25rem;
      padding: 2rem 4.688rem;
  }
`;
