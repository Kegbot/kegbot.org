import { createContext, type ReactNode, useContext, useEffect } from "react";

/** Callback set during SSR to capture the page title. */
export const TitleContext = createContext<((title: string) => void) | null>(
  null,
);

const SITE_NAME = "Kegbot";

function formatTitle(title: string) {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
}

export default function Page({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const setTitle = useContext(TitleContext);

  // SSR: push the title into the context so the worker can inject it.
  if (setTitle) {
    setTitle(formatTitle(title));
  }

  // Client: update document.title after hydration / navigation.
  useEffect(() => {
    document.title = formatTitle(title);
  }, [title]);

  return <>{children}</>;
}
