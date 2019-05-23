import chalk from 'chalk'

// OpError stands for operation error.
// it should be used to show a friendly error mesage after an operation is failed.
// use it with throw to benefit from oclif's error handling. it print the error
// and exit with 1.
export class OpError {
  message: string

  // act as like an oclif error so, @oclif/errors/handle can use the render() on 
  // error catch.
  oclif: Object = {
    exit: 1
  }

  constructor(err: string | Error) {
    if (err instanceof Error) {
      this.message = (<Error>err).message
      return
    }
    this.message = <string>err
  }

  render(): string {
    return chalk.red(this.message)
  }
}