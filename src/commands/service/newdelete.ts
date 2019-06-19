import Command from '../../service-command'

export default class ServiceDeployNew extends Command {
  static description = 'Delete a service'

  static flags = {
    ...Command.flags,
  }

  static args = [{
    name: 'SERVICE',
    required: true,
    description: 'Service\'s hash or sid'
  }]

  static hidden = true

  async run(): Promise<void> {
    const {args} = this.parse(ServiceDeployNew)
    this.spinner.start('Delete service')
    return new Promise<string>((resolve, reject) => {
      this.serviceAPI.Delete({hashOrSid: args.SERVICE}, err => {
        if (err) {
          reject(err)
          this.spinner.stop(err)
          return
        }
        this.spinner.stop()
        resolve()
      })
    })
  }
}
