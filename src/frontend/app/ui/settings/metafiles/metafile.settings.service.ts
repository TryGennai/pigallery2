import {Injectable} from '@angular/core';
import {NetworkService} from '../../../model/network/network.service';
import {SettingsService} from '../settings.service';
import {AbstractSettingsService} from '../_abstract/abstract.settings.service';
import {ClientConfig} from '../../../../../common/config/public/ClientConfig';

@Injectable()
export class MetaFileSettingsService extends AbstractSettingsService<ClientConfig.MetaFileConfig> {
  constructor(private _networkService: NetworkService,
              _settingsService: SettingsService) {
    super(_settingsService);

  }

  public isSupported(): boolean {
    return this._settingsService.settings.value.Client.Map.enabled === true;
  }


  showInSimplifiedMode(): boolean {
    return false;
  }

  public updateSettings(settings: ClientConfig.MetaFileConfig): Promise<void> {
    return this._networkService.putJson('/settings/metafile', {settings: settings});
  }

}
