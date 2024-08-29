import { ROUTES } from "@/constants/routes";
import { RootLayout } from "@/layouts/RootLayout";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";
import { Suspense } from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

export default function App() {
	const router =
		createBrowserRouter(
			createRoutesFromElements(
				<Route errorElement={<ErrorPage />}>
					<Route element={<RootLayout />}>
						<Route path={ROUTES.home} element={<Home />} />
						<Route path={ROUTES.about} element={<About />} />
						<Route path={ROUTES.contact} element={<Contact />} />
					</Route>
				</Route>
			)
		)


	return (
		<Suspense>
			<RouterProvider router={router} />
		</Suspense>
	)
}