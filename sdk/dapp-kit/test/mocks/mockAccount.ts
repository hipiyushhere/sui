// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { WalletAccount } from '@mysten/wallet-standard';
import { ReadonlyWalletAccount } from '@mysten/wallet-standard';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';

export function createMockAccount(accountOverrides: Partial<WalletAccount> = {}) {
	const keypair = new Ed25519Keypair();
	return new ReadonlyWalletAccount({
		address: keypair.getPublicKey().toSuiAddress(),
		publicKey: keypair.getPublicKey().toSuiBytes(),
		chains: ['sui:unknown'],
		features: ['sui:signAndExecuteTransactionBlock', 'sui:signTransactionBlock'],
		...accountOverrides,
	});
}
