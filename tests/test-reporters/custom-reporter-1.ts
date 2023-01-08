import { FullConfig } from "@playwright/test";
import { FullResult, Reporter, Suite, TestCase, TestResult } from "@playwright/test/reporter";

class MyReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
        console.log(`Starting the run with ${suite.allTests().length} tests\n`);
    }
    // onTestBegin(test: TestCase) {
    //     console.log(`Starting test ${test.title}`);
    // }
    onTestEnd(test: TestCase, result: TestResult) {
        console.log(`Finished test ${test.title}: ${result.status.toUpperCase()}`);
    }
    onEnd(result: FullResult) {
        console.log(`\nFinished the run: ${result.status.toUpperCase()}`);
    }
}
export default MyReporter;