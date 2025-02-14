import * as Popover from "@radix-ui/react-popover";

export default function PopOver() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button" aria-haspopup="dialog" aria-expanded={false}>
            Click Me
          </button>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content>
            <h2> Welcome to the Food and Travel social network</h2>
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
