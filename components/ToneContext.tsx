import react from "react";

const ToneContext = react.createContext<typeof import("tone") | null>(null);

const ToneProvider: react.FC<react.PropsWithChildren<{ fallback?: react.ReactNode }>> = ({ fallback, children }) => {
	const [tone, setTone] = react.useState<typeof import("tone") | null>(null);

	react.useEffect(() => {
		import("tone").then(v => setTone(v));
	}, []);

	return <ToneContext.Provider value={tone}>
		{(fallback && !tone) ? fallback : children}
	</ToneContext.Provider>;
};

export { ToneProvider, ToneContext };