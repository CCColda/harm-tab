import { useEffect } from "react";

export default function useEventListener(object: Document | Window | HTMLElement, event: string, callback: EventListenerOrEventListenerObject, deps: any[] = undefined) {
	useEffect(() => {
		if (object) {
			object.addEventListener(event, callback);

			return () => object.removeEventListener(event, callback);
		}
	}, deps)
}