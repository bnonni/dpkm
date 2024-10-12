#!/usr/bin/env node
import { program } from 'commander';
import { dpmInstall } from './cli/install.js';
import { dpmUninstall } from './cli/uninstall.js';
import { Logger } from '../utils/logger.js';
import { dpmPublish } from './cli/publish.js';

// Install command
program
  .command('install [packages...]')
  .command('i [packages...]')
  .command('add [packages...]')
  .description('Install DPKs')
  .allowUnknownOption()
  .action(async (args) => {
    const packages: string[] = [];
    const flags: string[] = [];
    args.filter((arg: string) => (arg.startsWith('-') || arg.startsWith('--'))
      ? flags.push(arg)
      : packages.push(arg));
    await dpmInstall(packages, flags);
  });

// Uninstall command
program
  .command('uninstall [packages...]')
  .command('u [packages...]')
  .command('remove [packages...]')
  .description('Uninstall DPKs')
  .allowUnknownOption()
  .action((args) => {
    const packages: string[] = [];
    const flags: string[] = [];
    args.filter((arg: string) => (arg.startsWith('-') || arg.startsWith('--'))
      ? flags.push(arg)
      : packages.push(arg));
    dpmUninstall(packages);
  });


// Publish command
program
  .command('publish')
  .description('Publish a DPK')
  .allowUnknownOption()
  .action((args) => {
    const packages: string[] = [];
    const flags: string[] = [];
    args.filter((arg: string) => (arg.startsWith('-') || arg.startsWith('--'))
      ? flags.push(arg)
      : packages.push(arg));
    dpmPublish();
  });

program.parse();