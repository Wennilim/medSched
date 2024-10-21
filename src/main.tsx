import { KindeProvider } from '@kinde-oss/kinde-auth-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			refetchOnWindowFocus: false,
		},
	},
});

createRoot(document.getElementById('root')!).render(
	<KindeProvider
		clientId="06d9548a0a5a4e33b8286eacba22b453"
		domain="https://wennilim99.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
		onRedirectCallback={(user, app_state) => {
			window.location.href = "http://localhost:5173";
			console.log(user, app_state);
		}}
	>
		<QueryClientProvider client={queryClient}>
			<StrictMode>
				<App />
			</StrictMode>
		</QueryClientProvider>
	</KindeProvider>
)
