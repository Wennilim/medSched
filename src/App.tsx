import { ROUTES } from "@/constants/routes";
import { RootLayout } from "@/layouts/RootLayout";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Details } from "@/pages/Details";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";
import { Search } from "@/pages/Search";
import { ProtectedRoutes } from "@/utils/ProtectedRoutes";
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
						<Route path={ROUTES.search} element={<Search />} />
						<Route element={<ProtectedRoutes />}>
							<Route path={ROUTES.detail} element={<Details />} />
						</Route>
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