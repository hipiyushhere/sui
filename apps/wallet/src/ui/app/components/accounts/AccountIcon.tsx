// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import {
	SocialFacebook24,
	LogoGoogle,
	LogoTwitch,
	Sui,
	LogoQredo,
	LedgerLogo17,
} from '@mysten/icons';
import { type SerializedUIAccount } from '_src/background/accounts/Account';
import { isZkAccountSerializedUI } from '_src/background/accounts/zk/ZkAccount';

function SuiIcon() {
	return (
		<div className="bg-steel rounded-full text-white h-4 w-4 flex items-center justify-center p-1">
			<Sui />
		</div>
	);
}

function ProviderIcon({ provider }: { provider: string }) {
	switch (provider) {
		case 'google':
			return <LogoGoogle className="h-4 w-4" />;
		case 'twitch':
			return <LogoTwitch className="h-4 w-4 text-twitch" />;
		case 'facebook':
			return <SocialFacebook24 className="h-4 w-4 text-facebook" />;
		default:
			return <SuiIcon />;
	}
}

export function AccountIcon({ account }: { account: SerializedUIAccount }) {
	if (isZkAccountSerializedUI(account)) {
		return <ProviderIcon provider={account.provider} />;
	}
	if (account.type === 'qredo') {
		return <LogoQredo className="h-4 w-4" />;
	}
	if (account.type === 'ledger') {
		return <LedgerLogo17 className="h-4 w-4" />;
	}
	return <SuiIcon />;
}
