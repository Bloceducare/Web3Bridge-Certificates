import "styles/global.scss"; // Global styles
import StateProvider from "state"; // Global state provider
import type { AppProps } from "next/app"; // Types

// Export application
export default function MerkleAirdropStarter({
  Component,
  pageProps,
}: AppProps) {
  const AnyComponent = Component as any;
  return (
    // Wrap application in global state provider
    <StateProvider>
      <AnyComponent {...pageProps} />
    </StateProvider>
  );
}
