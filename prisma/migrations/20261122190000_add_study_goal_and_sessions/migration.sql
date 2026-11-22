CREATE TABLE "study_goal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "examSlug" TEXT NOT NULL,
    "examDate" TEXT,
    "objective" TEXT,
    "sessionsPerWeek" INTEGER NOT NULL DEFAULT 3,
    "sessionMinutes" INTEGER NOT NULL DEFAULT 30,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "study_goal_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "study_session" (
    "id" TEXT NOT NULL,
    "goalId" TEXT NOT NULL,
    "scheduledOn" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "study_session_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "study_goal_userId_key" ON "study_goal"("userId");
CREATE INDEX "study_session_goalId_scheduledOn_idx" ON "study_session"("goalId", "scheduledOn");

ALTER TABLE "study_goal" ADD CONSTRAINT "study_goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "study_session" ADD CONSTRAINT "study_session_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "study_goal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
