<?php

namespace App\Http\Controllers;

use App\Models\Squad;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::with('players')->get();
        return Inertia::render('teams/team', [
            'teams' => $teams,
            'name' => 'Team ' . Team::where('id', auth()->user()->id)->count() + 1
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $name = 'Team ' . Team::where('id', auth()->user()->id)->count();
        return Inertia::render('teams/manage', ['name' => $name]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:25',
        ]);

        $team = Team::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('teams.edit', ['team' => $team])->with('success', 'Team created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $team = Team::findOrFail($id);
        return Inertia::render('teams/manage', ['team' => $team]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $team = Team::with('players')->findOrFail($id);
        return Inertia::render('teams/manage', ['team' => $team]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:25',
        ]);

        $team = Team::findOrFail($id);
        $team->update([
            'name' => $request->name,
        ]);

        return redirect()->route('teams.edit', ['team' => $team])->with('success', 'Team updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
