export default class ErrorHandler {
  public static async wrap(run: () => unknown | Promise<unknown>) {
    try {
      await run();
    } catch (error) {
      console.error(error);
    }
  }

  public static async run<T>(run: () => T | Promise<T>, fallBackValue: T, errorMessage?: string): Promise<T> {
    try {
      return await run();
    } catch (error) {
      errorMessage ? console.error(errorMessage) : console.error(error);
      return fallBackValue;
    }
  }
}
