/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  PatternPrompt,
  Prompt,
  ScrollOptions,
  printPatternCaret,
  printRestoredPatternCaret,
} from 'jest-watcher';

export default class TestNamePatternPrompt extends PatternPrompt {
  constructor(pipe: NodeJS.WritableStream, prompt: Prompt) {
    super(pipe, prompt, 'tests');
  }

  protected _onChange(pattern: string, options: ScrollOptions): void {
    super._onChange(pattern, options);
    this._printPrompt(pattern);
  }

  private _printPrompt(pattern: string): void {
    const pipe = this._pipe;
    printPatternCaret(pattern, pipe);
    printRestoredPatternCaret(pattern, this._currentUsageRows, pipe);
  }
}
