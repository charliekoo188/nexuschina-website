import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Programs from "@/pages/Programs";
import Experience from "@/pages/Experience";
import Resources from "@/pages/Resources";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { MicrosoftClarity } from "./components/MicrosoftClarity";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/insights/:slug"} component={InsightArticle} />
      <Route path={"/programs"} component={Programs} />
      <Route path={"/experience"} component={Experience} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/contact"} component={Contact} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <GoogleAnalytics />
          <MicrosoftClarity />
          <Toaster />
          <ScrollToTop />
          <ScrollToTopOnNavigate />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
