import { Flex, VStack } from '_ui/box';

import { TrackerProvider } from '_app/context/Tracker/TrackerCtx';
import { TrackerUpdatesProvider } from '_app/context/Tracker/TrackerUpdatesCtx';

import { Symbols } from '_features/Tracker/Symbols/Symbols';
import { Watchlist } from '_features/Tracker/Watchlist/Watchlist';

export default function App() {
  return (
    <Flex className="flex-col-reverse lg:flex-row">
      <TrackerProvider>
        <TrackerUpdatesProvider>
          <VStack className="grow min-h-96 h-[100dvh] p-6 max-lg:pt-0 lg:pr-0">
            <Symbols className="grow h-full" />
          </VStack>

          <VStack className="grow-3 min-h-96 lg:h-[100dvh] p-6">
            <Watchlist className="grow h-full" />
          </VStack>
        </TrackerUpdatesProvider>
      </TrackerProvider>
    </Flex>
  );
}
