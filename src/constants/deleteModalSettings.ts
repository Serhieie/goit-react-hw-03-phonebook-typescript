const windowWidth: number = window.innerWidth;

interface Settings {
  overlay: {
    position: string;
    zIndex: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
    backgroundColor: string;
  };
  content: {
    position: string;
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
    border: string;
    background: string;
    overflow: string;
    WebkitOverflowScrolling: string;
    borderRadius: string;
    outline: string;
    padding: string;
  };
}

const settings: Settings = {
  overlay: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(250, 250, 210, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: 'rgb(245, 187, 86)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: windowWidth > 768 ? '60px 40px' : '20px 10px',
  },
};

export { settings };
