/**
 * Git module to be used on production build results.
 * The API is based on inlined git information.
 * * This is extrected from Astro starlight's utils.
 * source:https://github.com/withastro/starlight/blob/main/packages/starlight/utils/gitInlined.ts

 */

import type { GitAPI, getAllNewestCommitDate } from "./git";

type InlinedData = ReturnType<typeof getAllNewestCommitDate>;

export const makeAPI = (data: InlinedData): GitAPI => {
  const trackedDocsFiles = new Map(data);

  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp)
        throw new Error(
          `Failed to retrieve the git history for file "${file}"`
        );
      return new Date(timestamp);
    },
  };
};
