import { ReactNode, useEffect, useRef } from "react";

type ObserverProps = {
  hasNextPage: boolean | undefined;
  fetchNextPage: VoidFunction;
  children: ReactNode;
};

export const Observer = ({
  hasNextPage = false,
  fetchNextPage,
  children,
}: ObserverProps) => {
  const observerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    });

    const currentElement = observerElement.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <div className="observer-block" ref={observerElement}>
      {children}
    </div>
  );
};
