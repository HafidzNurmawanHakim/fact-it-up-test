import * as React from "react";

function GroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path
        d="M22.513 29H9.487a2.953 2.953 0 01-2.422-1.24 2.952 2.952 0 01-.41-2.69l.465-1.398a4.336 4.336 0 013.567-2.916c1.398-.171 3.455-.375 5.313-.375s3.914.204 5.312.375a4.333 4.333 0 013.566 2.915l.001.001.466 1.399a2.953 2.953 0 01-.411 2.689A2.951 2.951 0 0122.513 29zM16 22.38c-1.757 0-3.726.196-5.068.361a2.325 2.325 0 00-1.914 1.563l-.465 1.398a.974.974 0 00.134.888c.188.26.479.41.8.41h13.025c.32 0 .612-.149.8-.41a.978.978 0 00.136-.888l-.466-1.398a2.322 2.322 0 00-1.914-1.563c-1.342-.165-3.311-.361-5.068-.361zm0-2.986c-3.289 0-5.965-2.676-5.965-5.965S12.711 7.464 16 7.464s5.965 2.676 5.965 5.965-2.676 5.965-5.965 5.965zm0-9.93c-2.187 0-3.965 1.779-3.965 3.965s1.778 3.965 3.965 3.965 3.965-1.779 3.965-3.965S18.187 9.464 16 9.464z"
        fill="#333"
      />
      <path
        d="M26.223 21.997a1 1 0 110-2h2.243a.807.807 0 00.661-.339.806.806 0 00.112-.734l-.427-1.278a2.038 2.038 0 00-1.678-1.371 47.752 47.752 0 00-2.908-.272.999.999 0 01-.938-1.058 1.002 1.002 0 011.058-.938c.941.057 1.961.151 3.032.283a4.046 4.046 0 013.331 2.723l.427 1.278c.29.869.149 1.794-.386 2.537a2.782 2.782 0 01-2.284 1.17l-2.243-.001zm-1.937-9.227a1 1 0 01-.393-1.92 3.535 3.535 0 002.153-3.259 3.51 3.51 0 00-1.037-2.502 3.516 3.516 0 00-2.502-1.036h-.001a3.562 3.562 0 00-3.31 2.285 1 1 0 11-1.869-.709 5.57 5.57 0 015.178-3.576h.002c1.479 0 2.87.576 3.916 1.621a5.5 5.5 0 011.623 3.917 5.534 5.534 0 01-3.368 5.1 1.02 1.02 0 01-.392.079zM3.755 22a2.787 2.787 0 01-2.283-1.168 2.79 2.79 0 01-.388-2.537l.426-1.279a4.048 4.048 0 013.331-2.725 50.203 50.203 0 013.031-.285 1.004 1.004 0 011.059.938 1.002 1.002 0 01-.938 1.059 46.92 46.92 0 00-2.908.274 2.036 2.036 0 00-1.677 1.371l-.426 1.279a.81.81 0 00.111.735.81.81 0 00.662.338H6a1 1 0 110 2H3.755zm4.177-9.229c-.131 0-.264-.026-.392-.08a5.533 5.533 0 01-3.373-5.097 5.502 5.502 0 011.621-3.918 5.505 5.505 0 013.917-1.623h.001a5.572 5.572 0 015.181 3.575 1 1 0 11-1.869.71 3.562 3.562 0 00-3.312-2.285h-.001c-.945 0-1.834.369-2.502 1.038a3.51 3.51 0 00-1.036 2.502 3.537 3.537 0 002.156 3.258 1 1 0 01-.391 1.92z"
        fill="#008ad0"
      />
    </svg>
  );
}

const MemoGroupIcon = React.memo(GroupIcon);
export default MemoGroupIcon;
