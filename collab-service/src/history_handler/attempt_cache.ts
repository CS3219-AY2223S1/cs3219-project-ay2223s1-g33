import IAttemptCache from './attempt_cache_types';
import { HistoryAttempt, Question } from '../proto/types';
import { CreateAttemptResponse } from '../proto/history-crud-service';
import decodeAttempt from './attempt_decoder';

/**
 * Intermediate representation of a code submission.
 * Temporary storage & validator of history attempt.
 */
class AttemptCache implements IAttemptCache {
  question: Question | undefined;

  lang: string;

  submission: string;

  users: string[];

  call: ((attempt: HistoryAttempt) => Promise<CreateAttemptResponse>) | undefined;

  constructor() {
    this.question = undefined;
    this.lang = '';
    this.submission = '';
    this.users = [];
    this.call = undefined;
  }

  setQuestion(qns: string) {
    if (!qns) {
      this.question = undefined;
    } else {
      this.question = JSON.parse(qns);
    }
  }

  setUsers(username: string[]) {
    this.users = username;
  }

  setLangContent(data: Uint8Array) {
    const {
      lang,
      content,
    } = decodeAttempt(data);
    this.lang = lang;
    this.submission = content;
  }

  setUploader(call: (attempt: HistoryAttempt) => Promise<CreateAttemptResponse>) {
    this.call = call;
  }

  /**
   * Checks if cache has all fields populated
   */
  isValid(): boolean {
    return !(
      this.question === undefined
    || this.lang === ''
    || this.submission === ''
    || !this.users.length
    || this.call === undefined
    );
  }

  /**
   * Checks if all fields are cleared
   */
  isEmpty(): boolean {
    return (
      this.question === undefined
      && this.lang === ''
      && this.submission === ''
      && !this.users.length
      && this.call === undefined
    );
  }

  /**
   * Resets all fields
   */
  reset() {
    this.question = undefined;
    this.lang = '';
    this.submission = '';
    this.users = [];
    this.call = undefined;
  }

  /**
   * Generate history attempt object from cached fields
   * @private
   * @return attempt
   */
  getHistoryAttempt(): HistoryAttempt {
    const attempt = HistoryAttempt.create({
      question: this.question,
      language: this.lang,
      submission: this.submission,
      users: this.users,
    });
    this.reset();
    return attempt;
  }

  /**
   * Executes call lambda
   */
  async executeUploader(): Promise<CreateAttemptResponse> {
    if (this.call === undefined) {
      return CreateAttemptResponse.create({
        errorMessage: 'Uploader undefined',
      });
    }
    return this.call(this.getHistoryAttempt());
  }
}

function createAttemptCache() {
  return new AttemptCache();
}

export {
  AttemptCache,
  createAttemptCache,
};