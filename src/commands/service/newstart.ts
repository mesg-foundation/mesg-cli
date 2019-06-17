import {flags} from '@oclif/command'

import Command from '../../service-command'

export default class ServiceDeployNew extends Command {
  static description = 'Start a service instance'

  static flags = {
    ...Command.flags,
    env: flags.string({
      description: 'set env defined in mesg.yml (configuration.env)',
      multiple: true,
      helpValue: 'FOO=BAR'
    })
  }

  static args = [{
    name: 'SERVICE',
    required: true,
    description: 'Service\'s sid or hash'
  }]

  static hidden = true

  async run(): Promise<string> {
    const {args, flags} = this.parse(ServiceDeployNew)
    this.spinner.start('Start service')
    return new Promise<string>((resolve, reject) => {
      this.instanceAPI.Create({serviceHash: args.SERVICE, env: flags.env}, (err, resp) => {
        if (err) {
          reject(err)
          this.spinner.stop(err)
          return
        }
        this.spinner.stop(resp.hash)
        resolve(resp.hash)
      })
    })
  }
}
