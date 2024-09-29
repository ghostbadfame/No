import ReactDOM from 'react-dom/client';
import Overlay from './Overlay.tsx';

export default defineContentScript({
  matches: ["https://*.linkedin.com/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'overlay',
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(container);
        root.render(<Overlay />);
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root?.unmount();
      },
    });

    // Call mount to add the UI to the DOM
    ui.mount();
  },
});