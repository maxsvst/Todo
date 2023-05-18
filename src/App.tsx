import ThemeContainer from "./ThemeContainer";
import {Theme} from "@const/types/ui";

import routes from "./pages/Routes";

function App() {
    return (
        <ThemeContainer defaultTheme={Theme.Dark}>
            {routes}
        </ThemeContainer>
    )
}

export default App