import React from "react";
import Button from "./Button";
import { FaKey } from "react-icons/fa";
import Dialog from "./Dialog";
import Input from "./Input";

export default function SettingsDialog({
  show,
  close,
  customApiKey,
  setCustomApiKey,
}: {
  show: boolean;
  close: () => void;
  customApiKey: string;
  setCustomApiKey: (key: string) => void;
}) {
  const [key, setKey] = React.useState<string>(customApiKey);

  const handleClose = () => {
    setKey(customApiKey);
    close();
  };

  const handleSave = () => {
    setCustomApiKey(key);
    close();
  };

  return (
    <Dialog
      header="Settings ⚙"
      isShown={show}
      close={handleClose}
      footerButton={<Button onClick={handleSave}>Save</Button>}
    >
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p className="mb-3">
          Welcome to AgentGPT! We&apos;re receiving traffic far higher than our
          small team is able to provide for at the moment.
        </p>
        <p className="mb-3">
          Because of this, we momentarily require that users utilize their own
          OpenAI API key for AgentGPT. To do this, sign up for an OpenAI account
          and visit the following{" "}
          <a
            href="https://platform.openai.com/account/api-keys"
            className="text-blue-500"
          >
            link.
          </a>
        </p>
        <Input
          left={
            <>
              <FaKey />
              <span className="ml-2">Key:</span>
            </>
          }
          placeholder={"sk-..."}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
    </Dialog>
  );
}
