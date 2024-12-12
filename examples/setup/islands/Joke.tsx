import { useState } from "preact/hooks";
import { Button, Text } from "lunchbox";

export default function () {
  const [joke, setJoke] = useState<string>("");

  return (
    <div>
      <Button
        onClick={async () => setJoke(await (await fetch("/api/joke")).text())}
      >
        Make a joke
      </Button>
      <Text>{joke}</Text>
    </div>
  );
}
