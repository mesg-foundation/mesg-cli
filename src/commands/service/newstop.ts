import {flags} from '@oclif/command'

import Command from '../../service-command'

export default class ServiceDeployNew extends Command {
  static description = 'Stop a service instance'

  static flags = {
    ...Command.flags,
    keepData: flags.boolean({description: 'Do not delete instance\'s persistent data'}),
  }

  static args = [{
    name: 'INSTANCE',
    required: true,
    description: 'Service instance\'s hash'
  }]

  static hidden = true

  async run() {
    const {args, flags} = this.parse(ServiceDeployNew)
    this.spinner.start('Stop service')
    return new Promise((resolve, reject) => {
      this.instanceAPI.Delete({hash: args.INSTANCE, deleteData: !flags.keepData}, err => {
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
