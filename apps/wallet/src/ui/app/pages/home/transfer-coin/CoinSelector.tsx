// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SUI_TYPE_ARG } from '@mysten/sui.js/utils';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { ActiveCoinsCard } from '_components/active-coins-card';
import Overlay from '_components/overlay';
import { useUnlockedGuard } from '_src/ui/app/hooks/useUnlockedGuard';

function CoinsSelectorPage() {
	const [searchParams] = useSearchParams();
	const coinType = searchParams.get('type') || SUI_TYPE_ARG;
	const navigate = useNavigate();

	if (useUnlockedGuard()) {
		return null;
	}

	return (
		<Overlay
			showModal={true}
			title="Select Coin"
			closeOverlay={() =>
				navigate(
					`/send?${new URLSearchParams({
						type: coinType,
					}).toString()}`,
				)
			}
		>
			<ActiveCoinsCard activeCoinType={coinType} showActiveCoin={false} />
		</Overlay>
	);
}

export default CoinsSelectorPage;
