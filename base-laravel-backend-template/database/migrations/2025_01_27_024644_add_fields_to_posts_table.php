<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            // Add the meta_des column without the unique constraint
            $table->string('meta_des')->nullable()->after('slug');
        });

        // Ensure no NULL values in the meta_des column
        DB::table('posts')->whereNull('meta_des')->update(['meta_des' => DB::raw("CONCAT('default-', id)")]);

        // Resolve any duplicate values in the meta_des column
        DB::statement("
            UPDATE posts
            SET meta_des = CONCAT(meta_des, '-', id)
            WHERE meta_des IN (
                SELECT meta_des FROM (
                    SELECT meta_des FROM posts GROUP BY meta_des HAVING COUNT(*) > 1
                ) AS duplicates
            )
        ");

        // Add the unique constraint
        Schema::table('posts', function (Blueprint $table) {
            $table->unique('meta_des');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropUnique(['meta_des']);
            $table->dropColumn('meta_des');
        });
    }
};
